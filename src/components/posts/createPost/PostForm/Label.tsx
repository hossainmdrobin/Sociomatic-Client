import { Autocomplete, Button, Chip, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { FaChevronDown } from 'react-icons/fa'
import { IoAddCircleOutline } from 'react-icons/io5'

export default function Label({ register }: { register: UseFormRegister<FieldValues> }) {
    const [open, setOpen] = useState(true)
    const [skills, setSkills] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const handleAddSkill = () => {
        if (inputValue.trim() && !skills.includes(inputValue.trim())) {
          setSkills([...skills, inputValue.trim()]);
          setInputValue("");
        }
      };

    return (
        <fieldset className='mt-4 shadow p-2 rounded-lg bg-white transition'>
            <div onClick={() => setOpen(!open)} className='flex items-center justify-between py-1 cursor-pointer'>
                <h2 className='font-bold'>Label</h2>
                <FaChevronDown className='mr-2' />
            </div>
            <div className={`${open ? "" : "hidden"}`}>
                <Stack spacing={2} sx={{ maxWidth: 600 }}>
                    <Autocomplete
                        multiple
                        freeSolo
                        options={[]} // No predefined options, allows free input
                        value={skills}
                        onChange={(_, newValue: string[]) => setSkills(newValue)}
                        inputValue={inputValue}
                        onInputChange={(_, newInputValue: string) => setInputValue(newInputValue)}
                        renderTags={(value: string[], getTagProps) =>
                            value.map((option: string, index: number) => (
                                <Chip key={option} label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Add Label" placeholder="Type a Label" />
                        )}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<IoAddCircleOutline />}
                        onClick={handleAddSkill}
                        disabled={!inputValue.trim()}
                    >
                        Add Label
                    </Button>
                </Stack>
            </div>

        </fieldset>
    )
}
