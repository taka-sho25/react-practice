import React from 'react'

import { Button } from '@/components/Button'
import InputControl from '@/components/Input/control'
import { useFormHooks } from '..'

export const Form = () => {
  const { errors, control, handleSubmit, onSubmit } = useFormHooks()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputControl
          name="name"
          control={control}
          label="Name"
          placeholder="Name"
          error={errors.name?.message}
        />
      </div>
      <div>
        <InputControl
          name="email"
          control={control}
          label="Email"
          placeholder="Email"
          error={errors.email?.message}
        />
      </div>
      <div>
        <InputControl
          name="password"
          type="password"
          control={control}
          label="Password"
          placeholder="Password"
          error={errors.password?.message}
        />
      </div>
      <div>
        <InputControl
          name="passwordConfirm"
          type="password"
          control={control}
          label="Password Confirm"
          placeholder="Password Confirm"
          error={errors.passwordConfirm?.message}
        />
      </div>
      <Button type="submit">submit</Button>
    </form>
  )
}
