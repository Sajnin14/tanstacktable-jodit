import React from 'react'
import TanstackTable1 from '../Components/TanstackTableComponents/TanstackTable1'
import TanstackTable2 from '../Components/TanstackTableComponents/TanstackTable2'
import TanstackTable3 from '../Components/TanstackTableComponents/TanstackTable3'
import ShadcnTanstackTable from '@/Components/TanstackTableComponents/ShadcnTanstackTable'

export default function TanstackTable() {
  return (
    <div className='space-y-16'>
        <TanstackTable1/>
        <TanstackTable2/>
        <TanstackTable3/>
        <ShadcnTanstackTable/>
    </div>
  )
}
