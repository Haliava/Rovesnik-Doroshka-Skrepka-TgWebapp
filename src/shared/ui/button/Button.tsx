import classNames from 'classnames';
import React, { FormEvent } from 'react';
import styles from './styles.module.scss';

type Props = {
    className?: string,
    text: React.ReactNode,
    type?: 'blue' | 'white' | 'textRed' | 'widthBtn' | 'toBook',
    onClick: ((e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | ((e?: FormEvent<HTMLFormElement>) => void),
}
const Button = ({className, text, type, onClick}: Props) => {
    const buttonClasses = classNames(className, styles.root, {
        [styles.blue]: type === 'blue',
        [styles.white]: type === 'white',
        [styles.textRed]: type === 'textRed',
        [styles.widthBtn]: type === 'widthBtn',
        [styles.toBook]: type === 'toBook',
    });

    return (
        <div
            className={buttonClasses}
            // @ts-ignore
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default Button;