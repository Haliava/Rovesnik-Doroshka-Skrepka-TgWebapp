import React from 'react'
import styles from './styles.module.scss'
import { Optional, TEvent } from '../../shared/types'
import classNames from 'classnames'
import { arrow } from '../../shared/assets'

type Props = {
    data: Pick<TEvent, 'date' | 'name' | 'place'>
    className?: string
    fullWidth?: boolean
}
const EventInfoText = ({ data, className }: Props) => {
    const { date, name, place } = data

    return (
        <div className={classNames(className, styles.root)}>
            <div className={styles.rootName}>
                <h1>{name}</h1>
            </div>
            <div className={styles.rootInfo}>
                <p>
                    {date} | {place}
                    <span><img src={arrow} alt='arrow'/></span>
                </p>
            </div>
        </div>
    )
}

export default EventInfoText
