import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
const multilogicKey = import.meta.env.VITE_REACT_APP_MULTILOGIC_KEY;
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(multilogicKey, props.user.username, props.user.secret);
    return( 
        <div style ={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
        </div>
    );
}

export default ChatsPage;