import React from 'react'
import TextField, { textFieldClasses } from '@mui/material/TextField';
import Button from "@mui/material/Button"
import Box from '@mui/material/Box';
import { CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Center from "./Center"
import useForm from '../Hooks/useForm';




export default function Login() {
    const getFreshModelObject = () =>({
        name:'',
        email:'',
    })
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModelObject)
    const login = e =>{
        e.preventDefault();
        if (validate()){
            console.log(values);
        }
    }
    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.name = values.name != "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }
  return (
    <div>
    <Center>
        <Card sx={{
            width:"400",
        }}>
            <CardContent sx={{textAlign:"center"}}>
                <Typography variant='h3' sx={{ my: 3}} >Quiz</Typography>
                
                <Box sx={{
                '& .MuiTextField-root': {
                m: 1,
                width: '90%',
                },
                }}>
                <form noValidate autoComplete='off' onSubmit={login}>
                    
                    <TextField 
                        label="email" 
                        name="email" 
                        onChange={handleInputChange}
                        value={values.email}
                        variant='outlined' 
                        autoComplete='off'
                        placeholder='example@mail.com'
                        {...(errors.email && { error: true, helperText: errors.email })}
                        required> 
                    </TextField>
                    <TextField 
                        label="name" 
                        name="name" 
                        onChange={handleInputChange}
                        value={values.name}
                        variant='outlined' 
                        autoComplete='off' 
                        {...(errors.name && { error: true, helperText: errors.name })}
                        required> 
                    </TextField>
                    <Button variant="contained" type="submit" size='large' sx={{width:"90%"}}>Start</Button>
                </form>
                </Box>

            </CardContent>
        </Card>
        
    </Center>    
      
    </div>
  )
}
