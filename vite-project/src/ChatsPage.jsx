import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('f32b33b9-505a-4b90-81ea-0e62bbbadb2c', props.user.username, props.user.secret)
    return( <div style ={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>)
}
export default ChatsPage