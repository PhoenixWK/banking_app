'use client'

import React from 'react'
import CountUp from 'react-countup';

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <CountUp 
        end={amount} 
        duration={2}
        prefix="$"
        demicals={4}
        demical=","
    />
  )
}

export default AnimatedCounter
