/**
 * Validates that the values are valid and present. If all true, returns true,
 * otherwise returns object of errors
 * @param {Object} data
 * @returns Object|boolean
 */
const validateProductValues = (data) => {
    const validate = ([key, value]) => (
        !dataValidation.isPresent(key, value) ||
        !dataValidation.isValid(key, value)
    )

    const errors = Object
        .entries(data)
        .filter(validate)
        .map(([key]) => `${key.toUpperCase()} is either missing or invalid`)

    if (errors.length > 0) return errors
    return true
}

const dataValidation = {
    isPresent(type, value) {
        console.log(type)
        return allPresentAndValid[type].present(value)
    },
    isValid(type, value) {
        return allPresentAndValid[type].valid(value)
    }
}

const allPresentAndValid = {
    'name': {
        present: value => {
            return value.length > 0
        },
        valid: value => {
            return value.length < 255
        }
    },
    'summary': {
        present: value => {
            return value.length > 0
        },
        valid: value => {
            return value.length < 255
        }
    },
    'priceBeforeTax': {
        present: value => {
            return Math.ceil(Math.log10(value + 1)) > 0
        },
        valid: value => {
            return value > 0
        }
    },
    'priceAfterTax': {
        present: value => {
            return Math.ceil(Math.log10(value + 1)) > 0
        },
        valid: value => {
            return value > 0
        }
    },
    'vat': {
        present: value => {
            return Math.ceil(Math.log10(value + 1)) > 0
        },
        valid: value => {
            return value > 0
        }
    }
}

export default validateProductValues

