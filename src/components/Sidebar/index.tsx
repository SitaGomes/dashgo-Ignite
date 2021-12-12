import {Box, Stack, Text, Link, Icon} from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitBranchLine, RiGithubLine, RiInputMethodLine } from "react-icons/ri"
import { NavLinks } from "./NavLinks"
import { NavSection } from "./NavSection"

export function Sidebar() {
    return(
        <Box as="aside" w="64" mr="8">
            
            <Stack spacing="12" align="flex-start">

                <NavSection title="GERAL">
                    <NavLinks name="Dashboard" icon={RiDashboardLine} href="/dashboard"/>
                    <NavLinks name="Usuários" icon={RiContactsLine} href="/users"/>
                </NavSection>

                <NavSection title="AUTOMAÇÃO">
                    <NavLinks name="Formulários" icon={RiInputMethodLine} />
                    <NavLinks name="Automação" icon={RiGitBranchLine} />
                </NavSection>
    
            </Stack>

        </Box>        
    )
}