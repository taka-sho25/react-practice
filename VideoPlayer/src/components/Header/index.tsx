import React from 'react'

import { routes } from '@/route'
import './header.css'

export const Header: React.FC = () => (
  <div className="header">
    {routes.map((route) => (
      <a key={route.name} href={route.path} className="link">
        {route.name}
      </a>
    ))}
  </div>
)
