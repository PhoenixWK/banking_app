"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AuthForm = ({type}: {type: string}) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
        },
    })
        
      // 2. Define a submit handler.
    async function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true);
        try {
            //Sign up with Appwrite and create plaid token
            if(type === 'sign-up') {
                // const newUser = await signUp(data);
                // setUser(newUser)
            }
``
            //sign in operation, if 
            if(type === 'sign-in') {
                // const response = await signIn({
                //     email: data.email,
                //     password: data.password
                // });
                // if(response) router.push("/");
            }
        }catch {

        }finally {
            setIsLoading(false);
        }
    }
    
    return (
       <section className="auth-form">
            <header className="flex flex-col gap5 md:gap-x-8">
                <Link href="/" className="flex cursor-pointer items-center gap-1">
                    <Image 
                        src="/icons/logo.svg"
                        alt="Horizon logo"
                        width={34}
                        height={34}
                        className="size-[24px] max-xl:size-14"
                    />
                    <h1 className="text-26 font-ibm-plex-serif text-black font-bold">Horizon logo</h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="mt-4 text-24 lg:text-36 font-semibold text-gray-900">
                        {user ? 'Link Account': type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                    </h1>
                    <p className="mt-4 text-16 font-normal text-gray-600">
                        {user ? 'Link your account to get started' : 'Please enter your details'}
                    </p>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">
                    {/* PladLink */}
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {type === 'sign-up' && (
                                <>
                                    <div className="flex gap-4">
                                        <CustomInput 
                                            control={form.control}
                                            name='firstName'
                                            label='First Name'
                                            placeholder='Enter your name'
                                        />
                                        <CustomInput 
                                            control={form.control}
                                            name='lastName'
                                            label='Last Name'
                                            placeholder='Enter your last name'
                                        />
                                    </div>
                                    <CustomInput 
                                        control={form.control}
                                        name='address1'
                                        label='Address'
                                        placeholder='Enter your address'
                            /       >
                                    <CustomInput 
                                        control={form.control}
                                        name='city'
                                        label='City'
                                        placeholder='Enter your city'
                            /       >
                                    <div className="flex gap-4">
                                        <CustomInput 
                                            control={form.control}
                                            name='state'
                                            label='State'
                                            placeholder='Example: NY'
                                        />
                                        <CustomInput 
                                            control={form.control}
                                            name='postalCode'
                                            label='Postal Code'
                                            placeholder='Ex: 11101'
                            /           >
                                    </div>
                                    <CustomInput 
                                        control={form.control}
                                        name='dateOfBirth'
                                        label='Date of Birth'
                                        placeholder='YYYY-MM-DD'
                                    />
                                    <CustomInput 
                                        control={form.control}
                                        name='ssn'
                                        label='SSN'
                                        placeholder='Ex: 1234'
                                    />
                                </>
                            )}
                            <CustomInput 
                                control={form.control}
                                name='email'
                                label='Email'
                                placeholder='Enter your email'
                            />
                            <CustomInput 
                                control={form.control}
                                name='password'
                                label='Password'
                                placeholder='Enter your Password'
                            />
                            <div className="flex flex-col gap-4">
                                <Button type="submit" className="form-btn" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin"/> &nbsp;
                                            Loading...
                                        </>
                                    ) : (type === 'sign-in' ? "Sign In" : "Sign Up")}
                                </Button>
                            </div>
                        </form>
                    </Form>

                    <footer className="flex justify-center gap-1">
                        <p className="text-14 font-normal text-gray-600"> 
                            {type === 'sign-in' ? "Dont't have an account?" : "Already have an account?"}
                        </p>
                        <Link href={type === 'sign-in' ? "/sign-up" : "/sign-in"} className="form-link">
                            {type === 'sign-in' ? 'Sign up' : 'Sign in'}
                        </Link>
                    </footer>
                </>
            )}
       </section>
    )
}

export default AuthForm
