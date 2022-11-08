import styled from '@emotion/styled'

export const ModalWrapper = styled.div`
    ${(props) =>
        props.mode === 'dark'
            ? `
        background: #000;
        color: #fff;
        border: 1px solid #000;
      `
            : `
        background: #fff;
        color: #000;
        border: 1px solid #fff;
    `};

    width: 400px;
    min-height: 500px;
    overflow: hidden;
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 15px 30px;

    &:focus-visible {
        outline: none;
    }
`

export const ModalClose = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    padding: 65px 15px 15px;
    color: inherit;
    text-transform: uppercase;
`

export const ModalFooter = styled.div`
    display: flex;
    justify-content: center;
`
