'use client'

import { Typography } from '@yuki/ui/components/typography'
import { useState } from 'react'

export const Copyright: React.FC<{ handle: string }> = ({ handle }) => {
  // oxlint-disable-next-line react/hook-use-state
  const [year] = useState(() => new Date().getFullYear())

  return (
    <Typography>
      ©{year} {handle}. All rights reserved.
    </Typography>
  )
}
