import { Stack } from '@chakra-ui/react'
import React from 'react'
import { RiContactsLine, RiDashboardLine, RiGitBranchLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLinks } from './NavLinks'
import { NavSection } from './NavSection'

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">

            <NavSection title="GERAL">
                <NavLinks name="Dashboard" icon={RiDashboardLine} href="/dashboard"/>
                <NavLinks name="Usuários" icon={RiContactsLine} href="/users"/>
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLinks name="Formulários" icon={RiInputMethodLine} href="/forms"/>
                <NavLinks name="Automação" icon={RiGitBranchLine} href="/automation"/>
            </NavSection>

        </Stack>

    )
}
