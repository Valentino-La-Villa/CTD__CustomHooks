import { useState } from "react"

export default function useForm(initForm = {}) {

    const [formState, setFormState] = useState(initForm)

    const handleInputChange =({target})=>{
        setFormState(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    return {
        formState: formState,
        handleInputChange: handleInputChange,
    }

}