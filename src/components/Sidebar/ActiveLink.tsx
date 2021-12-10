import React, { cloneElement } from 'react'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
    children: React.ReactElement,
    shouldBeExactHref?: boolean
}

export function ActiveLink({children, shouldBeExactHref, ...rest}: ActiveLinkProps) {
    
    const {asPath} = useRouter()
    let isActive = false
    
    if (shouldBeExactHref && (asPath === rest.href || asPath === rest.as))
        isActive = true

    if (!shouldBeExactHref && (asPath.startsWith(String(rest.href)) || (asPath.startsWith(String(rest.as)))))
        isActive = true

    return (
        <Link {...rest}>
            {cloneElement(children, {color: isActive ? "pink.400" : "gray.50"})}
        </Link>
    )
}
