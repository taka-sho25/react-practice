import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form'

export const useDefaultForm = <FormType>(
  props: UseFormProps<FormType> & {
    defaultValues: FormType
  }
): UseFormReturn<FormType> => useForm(props)
