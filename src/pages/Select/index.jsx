import React, { useEffect } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'
import SelectNav from "@/components/SelectNav"
import { Wrapper } from './style'

export default function Select() {
    const navigate = useNavigate()
    let { id } = useParams();

    useEffect(() => {
        navigate(`/select/male`)

    }, [])
    return (
        <Wrapper>
            <SelectNav id={id} />
            <Outlet />
        </Wrapper>
    )
}
