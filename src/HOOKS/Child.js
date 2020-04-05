// memo tương ứng PureComponent trong class
import React, {memo, PureComponent} from 'react'

function Child() {
    console.log ("Child");
    return (
        <div>
            <h3>Child</h3>
        </div>
    )
}
export default memo(Child);