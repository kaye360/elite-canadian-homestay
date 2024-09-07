/**
 * Host family registration helper functions
 */

interface HfForm {
    [key: string] : string
}

export type HfFormSection = 'hf-form-host-family' | 'hf-form-parents' | 'hf-form-children' | 'hf-form-children-num' | 'hf-form-references'

export type HfFormPath = 
    '/register/host-family/host-family/' | 
    '/register/host-family/parents' |
    '/register/host-family/children-num' | 
    '/register/host-family/children' | 
    '/register/host-family/references' | 
    '/register/host-family/confirmation'

/**
 * Get host family form.
 * Each page should have a form with id #host-family
 */
export function getHostFamilyForm() {
    return document.querySelector('#host-family') as HTMLFormElement
}

/**
 * Goto the next step (page) of the form.
 * Saves data to localstorage and redirects
 */
export function next({ form, href, key } : {
    form : HTMLFormElement,
    href : HfFormPath,
    key  : HfFormSection
}) {
    saveFormData({form, key})
    window.location.href = href
}

/**
 * Get data from current form
 */
export function getFormData(form : HTMLFormElement) {
    return Object.fromEntries( new FormData(form) )
}

/**
 * Save data to local storage
 */
function saveFormData({ form, key } : {
     form : HTMLFormElement,
     key : HfFormSection
} ) {
    const data = getFormData(form)
    localStorage.setItem(key, JSON.stringify(data) )
}

/**
 * Automatically save data to localstorage on input blur
 */
export function autoSave({ form, key} : {
    form : HTMLFormElement,
    key : HfFormSection
}) {
    form.querySelectorAll('input, select, textarea').forEach( input => {
        input.addEventListener('blur', () => saveFormData({form, key}) )
    })
}

/**
 * Get host family data from LS
 * Return empty obj if no data
 */
export function getHostFamilyFormData(localStorageKey : HfFormSection) : HfForm {
    return localStorage.getItem(localStorageKey)
        ? JSON.parse( localStorage.getItem(localStorageKey) as string )
        : {}
}

/**
 * Clear host family data by key
 */
export function clearHostFamilyFormData(localStorageKey: HfFormSection) {
    localStorage.removeItem(localStorageKey)
}

/**
 * If there is data in local storage already saved, insert 
 * it into its associated text, tel, email etc. input
 */
export function insertSavedTextInputData(data : HfForm ) {
    for( const prop in data ) {
        const field = document.querySelector(`#${prop}`) as HTMLInputElement
        if( !field  ) continue
        field.value = data[prop]
    }
}

/**
 * If there is data in local storage already saved, toggle 
 * the associated checkbox input
 */
export function insertSavedCheckboxInputData(data : HfForm) {
    for( const prop in data ) {
        const field = document.querySelector(`input[name=${prop}]`) as HTMLInputElement
        if( !field || field.type !== 'checkbox'  ) continue
        field.checked = true
    }
}

/**
 * If there is data in local storage already saved, toggle 
 * the associated radio input
 */
export function insertSavedRadioInputData(data : HfForm) {
    for( const prop in data ) {
        const fields = Array.from( document.querySelectorAll(`input[name=${prop}]`) as NodeListOf<HTMLInputElement> )
        if( fields.every( field => field.type !== 'radio' ) ) continue
    
        const checkedField = data[prop] === 'true'
            ? fields[0] // True radio
            : fields[1] // False radio
    
        checkedField.checked = true
    }
}

/**
 * If there is data in local storage already saved, insert 
 * it into the associated textarea
 */
export function insertSavedTextareaData( {names, data} : {
    names : string[],
    data  : HfForm 
}) {
    names.forEach( name => {
        const textarea = document.querySelector(`textarea[name=${name}]`)
        textarea?.insertAdjacentText('beforeend', data[name] || '')
    })
}

/**
 * Reset textarea elements
 */
export function clearAllTextareaContent() {
    const form = getHostFamilyForm()
    const textareas = form.querySelectorAll('textarea') as NodeListOf<HTMLTextAreaElement>
    textareas.forEach( textarea => textarea.innerHTML = '')
}

/**
 * Reset input elements
 * Needed only for dynamically generated forms
 */
export function clearAllInputValues() {
    const form = getHostFamilyForm()
    const inputs = form.querySelectorAll('input') as NodeListOf<HTMLInputElement>
    inputs.forEach( input => input.setAttribute('value', ''))
}