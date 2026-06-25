import React, { useEffect, useState, useRef } from 'react'

export default function WorldClock({ initialZones = [
  'UTC',
  'America/New_York',
  'Europe/London',
  'Asia/Kolkata',
  'Asia/Tokyo',
  'Australia/Sydney'
] }) {

  const [zones, setZones] = useState(() => {
    try {
      const stored = localStorage.getItem('world_clock_zones')
      if(stored){
        const parsed = JSON.parse(stored)
        if(Array.isArray(parsed) && parsed.length) return parsed
      }
    } catch(e){}
    return initialZones
  })

  const [now, setNow] = useState(new Date())
  const [inputTz, setInputTz] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    localStorage.setItem('world_clock_zones', JSON.stringify(zones))
  }, [zones])

  function addZone(tz){
    const candidate = (tz || '').trim()
    if(!candidate) return
    try {
      new Intl.DateTimeFormat([], { timeZone: candidate })
    } catch(err){
      alert('Invalid IANA time zone. Example: "Europe/Paris" or "Asia/Kolkata".')
      return
    }
    if(!zones.includes(candidate)){
      setZones(prev => [...prev, candidate])
      setInputTz('')
    }
  }

  function removeZone(tz){
    setZones(prev => prev.filter(z => z !== tz))
  }

  function formatForZone(date, tz){
    const timeOptions = { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false, timeZone:tz }
    const dateOptions = { weekday:'short', year:'numeric', month:'short', day:'numeric', timeZone:tz }
    return {
      time: new Intl.DateTimeFormat([], timeOptions).format(date),
      date: new Intl.DateTimeFormat([], dateOptions).format(date)
    }
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between mb-4">
        <div className="flex gap-2 w-full">
          <input className="border rounded px-3 py-2 flex-1" placeholder="Type IANA timezone (e.g. Europe/Paris)" value={inputTz} onChange={e=>setInputTz(e.target.value)} />
          <button className="px-4 py-2 rounded bg-sky-600 text-white" onClick={()=>addZone(inputTz)}>Add</button>
        </div>
        <div>
          <button className="text-sm text-slate-500" onClick={()=>{ setZones(initialZones); localStorage.removeItem('world_clock_zones') }}>Reset</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {zones.length === 0 ? (
          <div className="p-6 text-center text-slate-500">No time zones selected.</div>
        ) : zones.map(tz => {
          const { time, date } = formatForZone(now, tz)
          return (
            <div key={tz} className="p-4 border rounded">
              <div className="flex items-center gap-2">
                <div className="font-semibold text-sky-600">{tz}</div>
                <button className="ml-auto text-sm text-slate-500" onClick={()=>removeZone(tz)}>Remove</button>
              </div>
              <div className="text-2xl font-bold mt-2">{time}</div>
              <div className="text-sm text-slate-500">{date}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
