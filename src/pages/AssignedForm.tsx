import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Fieldset,TextInput,Button} from '@mantine/core';

function AssignedForm({projectIndex,taskIndex,control,register}:any) {
  const {fields,append,remove} = useFieldArray({
    control,
    name:`project.${projectIndex}.task.${taskIndex}.assigned`
  });
  return (
    <>
      {fields.map((item,index)=>{
        return(
          <Fieldset legend="Worker" key={item.id} style={{marginLeft:'25px'}}>
          <TextInput withAsterisk label='Worker Name' placeholder='Worker Name' {...register(`project.${projectIndex}.task.${taskIndex}.assigned.workerName`)}/>
          <TextInput withAsterisk label='Worker Email' placeholder='Worker Email' {...register(`project.${projectIndex}.task.${taskIndex}.assigned.workerEmail`)}/>
          <br />
          <Button variant ="filled" color="red" type='button' onClick={()=>{remove(index)}}>Delete Worker</Button>
          </Fieldset>
        );
      })}
      <br/>
      <Button 
        variant='filled' 
        color='green' 
        type='button' 
        onClick={()=>{
          append(
            {
              workerName:'',
              workerEmail:''
            }
          )
        }
      }>
        Add Worker</Button>
    </>
  )
}

export default AssignedForm
