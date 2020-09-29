// 客户管理

import React from 'react'
import { renderRoutes } from '../../utils/renderRoutes'
class ClientAdminIndex extends React.Component {
    render() {
        return (
            renderRoutes(this.props.route.children)
        )
    }
};

export default ClientAdminIndex;