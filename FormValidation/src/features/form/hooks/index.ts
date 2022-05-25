import { SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string, ref as yupRef } from 'yup'

import { useDefaultForm } from '@/hooks/form'

type Form = {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  password: string().min(5).required(),
  passwordConfirm: string()
    .min(5)
    .test('isEqual', 'Password do not match!', function (v) {
      const ref = yupRef('password')
      return v === this.resolve(ref)
    }),
})

export const useFormHooks = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useDefaultForm<Form>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data)
  }

  return {
    errors,
    control,
    handleSubmit,
    onSubmit,
  }
}
