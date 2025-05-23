'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Portal } from '@mui/base/Portal';
import { FocusTrap } from '@mui/base/FocusTrap';
import { Button } from '@mui/base/Button';
import { unstable_useModal as useModal } from '@mui/base/unstable_useModal';
import Fade from '@mui/material/Fade';
import SingleSocialButton from './SingleSocialButton';
import { RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddProfile } from '@/redux/slices/layoutSlices/layoutSlice';
import { facebookLogin } from '@/firebase/auth';


const socialButtons = [
    { name: 'Facebook', icon: '/media/icons/facebook.png', feature: "Bussiness Page", func:facebookLogin },
    { name: 'Instragram', icon: '/media/icons/instagram.png', feature: "Bussiness or Creator" },
    { name: 'Tiktok', icon: '/media/icons/tiktok.png', feature: "Bussiness or Creator" },
    { name: 'LinkedIn', icon: '/media/icons/linkedin.png', feature: "Page or Profile" },
    { name: 'X', icon: '/media/icons/x.png', feature: "Profile" },
    { name: 'Pinterest', icon: '/media/icons/pinterest.png', feature: "Bussiness or profile" },
]

export default function SocialLoginButtons() {
    const open = useSelector((state: RootState) => state.persistedReducer.appTopBar.addProfileOpen);
    const dispatch = useDispatch()
    const handleClose = () => dispatch(toggleAddProfile());

    return (
        <div>
            {/* <TriggerButton onClick={handleOpen}>Open modal</TriggerButton> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <ModalContent sx={style}>
                        <div className='grid grid-cols-3 gap-4'>
                            {socialButtons.map((button, index) => (
                                <SingleSocialButton key={button.name} {...button}/>
                            ))}
                        </div>
                    </ModalContent>
                </Fade>
            </Modal>
        </div>
    );
}

interface ModalProps {
    children: React.ReactElement<any>;
    closeAfterTransition?: boolean;
    container?: Element | (() => Element | null) | null;
    disableAutoFocus?: boolean;
    disableEnforceFocus?: boolean;
    disableEscapeKeyDown?: boolean;
    disablePortal?: boolean;
    disableRestoreFocus?: boolean;
    disableScrollLock?: boolean;
    hideBackdrop?: boolean;
    keepMounted?: boolean;
    onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
    onTransitionEnter?: () => void;
    onTransitionExited?: () => void;
    open: boolean;
}

const Modal = React.forwardRef(function Modal(
    props: ModalProps,
    forwardedRef: React.ForwardedRef<HTMLElement>,
) {
    const {
        children,
        closeAfterTransition = false,
        container,
        disableAutoFocus = false,
        disableEnforceFocus = false,
        disableEscapeKeyDown = false,
        disablePortal = false,
        disableRestoreFocus = false,
        disableScrollLock = false,
        hideBackdrop = false,
        keepMounted = false,
        onClose,
        open,
        onTransitionEnter,
        onTransitionExited,
        ...other
    } = props;

    const propsWithDefaults = {
        ...props,
        closeAfterTransition,
        disableAutoFocus,
        disableEnforceFocus,
        disableEscapeKeyDown,
        disablePortal,
        disableRestoreFocus,
        disableScrollLock,
        hideBackdrop,
        keepMounted,
    };

    const {
        getRootProps,
        getBackdropProps,
        getTransitionProps,
        portalRef,
        isTopModal,
        exited,
        hasTransition,
    } = useModal({
        ...propsWithDefaults,
        rootRef: forwardedRef,
    });

    const classes = {
        hidden: !open && exited,
    };

    const childProps: {
        onEnter?: () => void;
        onExited?: () => void;
        tabIndex?: string;
    } = {};
    if (children.props.tabIndex === undefined) {
        childProps.tabIndex = '-1';
    }

    // It's a Transition like component
    if (hasTransition) {
        const { onEnter, onExited } = getTransitionProps();
        childProps.onEnter = onEnter;
        childProps.onExited = onExited;
    }

    const rootProps = {
        ...other,
        className: clsx(classes),
        ...getRootProps(other),
    };

    const backdropProps = {
        open,
        ...getBackdropProps(),
    };

    if (!keepMounted && !open && (!hasTransition || exited)) {
        return null;
    }

    return (
        <Portal ref={portalRef} container={container} disablePortal={disablePortal}>
            <CustomModalRoot {...rootProps}>
                {!hideBackdrop ? <CustomModalBackdrop {...backdropProps} /> : null}
                <FocusTrap
                    disableEnforceFocus={disableEnforceFocus}
                    disableAutoFocus={disableAutoFocus}
                    disableRestoreFocus={disableRestoreFocus}
                    isEnabled={isTopModal}
                    open={open}
                >
                    {React.cloneElement(children, childProps)}
                </FocusTrap>
            </CustomModalRoot>
        </Portal>
    );
});

const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean }>(
    (props, ref) => {
        const { open, ...other } = props;
        return (
            <Fade in={open}>
                <div ref={ref} {...other} />
            </Fade>
        );
    },
);

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 550
};

const ModalContent = styled('div')(
    ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
);

const CustomModalRoot = styled('div')`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomModalBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const TriggerButton = styled(Button)(
    ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `,
);
