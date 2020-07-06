import React, { useState } from 'react';

<<<<<<< HEAD
const ColorPicker = styled(BlockPicker)`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    left: 2.5rem;
    top: 10px;
`;

const SignatureColor = styled.div`
    width: 250px;
    height: 250px;
    cursor: pointer;
    background-color: ${(props) => props.color || '#0652DD'};
    border-radius: 50%;
`;
=======
import { ColorPicker, SignatureColor } from '../Pages_styd';
>>>>>>> 6452a0601843471ac6e1b94af639766b86273dda

const ChangeSignatureColor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState('#0652DD');

    const togglePicker = () => {
        setIsOpen((prevState) => !prevState);
    };

    const onChangeComplete = (color, e) => {
        // console.log(color); -> rgb, hex 다 가지고 있어요
        setColor(color.hex);
    };

    const onClickSaveButton = () => {
        // TODO: 서버로 시그니처 컬러 수정 POST 요청 (axios 사용)
    };

    return (
        <main className='change-signature-color__main'>
            <h1 className='change-signature-color__title'>
                시그니처 컬러 변경
            </h1>
            <form
                className='change-signature-color__form'
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <div className='change-signature-color__picker'>
                    {/* // TODO: 시그니처 컬러 변경: 컬러피커 이용 */}
                    <SignatureColor
                        className='change-signature-color__color'
                        onClick={togglePicker}
                        color={color}
                    />
                    <ColorPicker
                        color={color}
                        isOpen={isOpen}
                        onChangeComplete={onChangeComplete}
                    />
                </div>
                <button
                    className='change-signature-color__button'
                    onClick={onClickSaveButton}
                >
                    저장
                </button>
            </form>
        </main>
    );
};

export default ChangeSignatureColor;
