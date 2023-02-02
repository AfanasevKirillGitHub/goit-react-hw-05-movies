import { ColorRing } from 'react-loader-spinner'
import { WrapperLoader } from './Loader.styled'

export const Loader = () => {
    return (<WrapperLoader>
        <ColorRing
            visible={true}
            height="200"
            width="200"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#e15b64', '#e15b64', '#e15b64', '#e15b64']}
        />
    </WrapperLoader>)
}