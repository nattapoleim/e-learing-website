import {
   AlertDialog,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { AuthService } from '@/services/AuthService'
import useStore from '@/store/userStore'
import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

type LoginInputs = {
   username: string
   password: string
}

function LoginPage() {
   const [alertOpen, setAlertOpen] = useState<boolean>(false)
   const { register, handleSubmit } = useForm<LoginInputs>()
   const navigate = useNavigate()

   const { loadUser } = useStore()

   const handleLogin: SubmitHandler<LoginInputs> = async data => {
      const { username, password } = data
      const user = await AuthService.login(username, password)
      if (user) {
         console.log('Login Successful')
         loadUser()
         return navigate('/')
      } else {
         console.log('login failed')
         setAlertOpen(true)
      }
   }

   return (
      <Box component='section' className='flex h-[calc(100svh-8rem)] items-center justify-center'>
         <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
            <AlertDialogContent>
               <AlertDialogHeader>
                  <AlertDialogTitle>Login Failed</AlertDialogTitle>
                  <AlertDialogDescription>Username or Password not invalid.</AlertDialogDescription>
               </AlertDialogHeader>
               <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialog>
         <Box
            component='main'
            color='primary.main'
            border={'1px solid'}
            className='p-10 mx-auto rounded shadow-xl w-[28rem]'
         >
            <Typography
               variant='h1'
               className='mb-4 font-serif text-4xl font-bold text-center uppercase text-primary'
            >
               Log In
            </Typography>
            <Box component='form' className='' onSubmit={handleSubmit(handleLogin)}>
               <Stack spacing={2} useFlexGap>
                  <TextField
                     label='Username'
                     fullWidth
                     {...register('username')}
                     placeholder='username'
                     type='text'
                     autoComplete='current-username'
                     required
                  />
                  <TextField
                     fullWidth
                     label='Password'
                     {...register('password')}
                     type='password'
                     placeholder='**********'
                     required
                     autoComplete='current-password'
                  />
                  <Button type='submit' variant='contained' size='large' className='w-full'>
                     Login
                  </Button>
               </Stack>
            </Box>
            <RouterLink
               to='/register'
               className='flex items-center justify-center mt-4 text-sm text-black no-underline'
            >
               Don't have an account ?
               <Link variant='body2' className='px-2 text-sm font-light text-primary/80 '>
                  Register now
               </Link>
            </RouterLink>
         </Box>
      </Box>
   )
}

export default LoginPage
