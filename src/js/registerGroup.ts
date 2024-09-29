
const localStorageKey = 'group-form'

/**
 * Get data from current form
 */
export function getFormData(form : HTMLFormElement) {
    return Object.fromEntries( new FormData(form) )
}

/**
 * Save data to local storage
 */
function saveFormData({ form } : {
     form : HTMLFormElement,
} ) {
    const data = getFormData(form)
    localStorage.setItem(localStorageKey, JSON.stringify(data) )
}

/**
 * Automatically save data to localstorage on input blur
 */
export function autoSave({ form } : {
    form : HTMLFormElement,
}) {
    form.addEventListener('keyup', () => saveFormData({form}))
}

/**
 * Get group data from LS
 * Return empty obj if no data
 */
 export function getGroupFormData() {
    return localStorage.getItem(localStorageKey)
        ? JSON.parse( localStorage.getItem(localStorageKey) as string )
        : {}
}

/**
 * Clear group data by key
 */
export function clearGroupFormData() {
    console.log('clear')
    localStorage.removeItem(localStorageKey)
}

/**
 * If there is data in local storage already saved, insert 
 * it into its associated text, tel, email etc. input
 */
 export function populateFromFromLocalStorage(data : {[key:string] : string} ) {
    for( const prop in data ) {
        const field = document.querySelector(`#${prop}`) as HTMLInputElement
        if( !field  ) continue
        field.value = data[prop]
    }
}