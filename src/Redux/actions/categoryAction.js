export const ADD_CATEGORY = 'ADD_CATEGORY'

export const addCategoryAC = (category) => {
    return {
        type: ADD_CATEGORY,
        payload: category    
    }
}