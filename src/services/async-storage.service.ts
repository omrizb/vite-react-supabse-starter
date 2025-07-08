type EntityWithId = {
    _id: string
    createdAt: number
    updatedAt: number
    [key: string]: any
}

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    removeAll,
}

// ========== Public API ==========

function query<T extends EntityWithId>(entityType: string, delay = 500): Promise<T[]> {
    const entitiesStr = localStorage.getItem(entityType)
    const entities: T[] = entitiesStr ? JSON.parse(entitiesStr) : []
    return new Promise(resolve => setTimeout(() => resolve(entities), delay))
}

function get<T extends EntityWithId>(entityType: string, entityId: string): Promise<T> {
    return query<T>(entityType).then(entities => {
        const entity = entities.find(e => e._id === entityId)
        if (!entity) {
            throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        }
        return entity
    })
}

function post<T extends Record<string, any>>(entityType: string, newEntity: T): Promise<T & EntityWithId> {
    const entityToSave: T & EntityWithId = {
        ...newEntity,
        _id: _makeId(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
    }
    return query<T & EntityWithId>(entityType).then(entities => {
        entities.push(entityToSave)
        _save(entityType, entities)
        return entityToSave
    })
}

function put<T extends EntityWithId>(entityType: string, updatedEntity: T): Promise<T> {
    updatedEntity.updatedAt = Date.now()
    return query<T>(entityType).then(entities => {
        const idx = entities.findIndex(e => e._id === updatedEntity._id)
        if (idx < 0) {
            throw new Error(`Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`)
        }
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType: string, entityId: string): Promise<string> {
    return query<EntityWithId>(entityType).then(entities => {
        const idx = entities.findIndex(e => e._id === entityId)
        if (idx < 0) {
            throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        }
        entities.splice(idx, 1)
        _save(entityType, entities)
        return entityId
    })
}

function removeAll(entityType: string, key: string, value: any): Promise<number> {
    return query<EntityWithId>(entityType).then(entities => {
        const indexes: number[] = []
        entities.forEach((entity, idx) => {
            if (entity[key] === value) indexes.push(idx)
        })
        if (indexes.length === 0) {
            throw new Error(`Remove failed, cannot find entities with ${key}: ${value} in: ${entityType}`)
        }
        for (let i = indexes.length - 1; i >= 0; i--) {
            entities.splice(indexes[i], 1)
        }
        _save(entityType, entities)
        return indexes.length
    })
}

// ========== Private ==========

function _save(entityType: string, entities: any[]) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5): string {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
