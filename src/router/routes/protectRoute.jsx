import {useSelector} from "react-redux";
import {Suspense} from "react";
import {Navigate} from "react-router-dom";

const ProtectRoute = ({route, children}) => {
    const { role, userInfo  } = useSelector((state) => state.auth)

    if (role) {
        if (route.role) {
            if (userInfo) {
                if (userInfo.role === route.role) {
                    if (route.visibility?.includes(userInfo.status) ||
                        (!route.visibility && route.status === userInfo.status)
                    ){
                        return <Suspense fallback={null}>{children}</Suspense>
                    } else {
                        if (userInfo.status === 'pending') {
                            return <Navigate to='/seller/account-pending' replace />
                        } else {
                            return <Navigate to='/seller/account-deactive' replace />
                        }
                    }
                } else {
                    if (route.visibility) {
                        if (route.visibility.some(r => r === userInfo.status)) {
                            return <Suspense fallback={null}>{children}</Suspense>
                        } else {
                            return <Navigate to='/seller/account-pending' replace />
                        }
                    } else {
                        return <Suspense fallback={null}>{children}</Suspense>
                    }
                }
            } else {
                return <Navigate to='/unauthorized' replace />
            }
        }
    } else {
        return <Navigate to='/login' replace />
    }
}

export default ProtectRoute
