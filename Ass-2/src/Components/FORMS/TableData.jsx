import React from 'react'

export default function TableData({ stuData, fatherData, motherData, EmgContData }) {
    console.log(stuData)
    console.log(fatherData)
    console.log(motherData)
    console.log(EmgContData)
  return (
    <div className='p-28 relative overflow-x-auto'>
  <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
  <tr>
    <th colSpan={5}>Student Data</th>
    <th colSpan={6}>Father Data</th>
    <th colSpan={6}>Mother Data</th>
    <th colSpan={2}>Emerg Contact Data</th>
  </tr>
  <tr>
   <td>Name</td>
   <td>DOB</td>
   <td>Place Of Birth</td>
   <td>First Language</td>
   <td>Address</td>
    <td>Name</td>
    <td>Email</td>
    <td>Education Qualification</td>
    <td>Profession</td>
    <td>Designation</td>
    <td>Phone</td>
    {/* Father */}
    <td>Name</td>
    <td>Email</td>
    <td>Education Qualification</td>
    <td>Profession</td>
    <td>Designation</td>
    <td>Phone</td>
    {/* Mother */}
    {/* EmergCon */}
    <td>Relation</td>
    <td>Phone</td>          
  </tr>
</table>   


    </div>
  )
}
