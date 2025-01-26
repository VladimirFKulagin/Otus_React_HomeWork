/*
// Higher-Order Component
function withLoading(Component) {
  return function WrappedComponent({ ...props }) {
    if (props.isAuth) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

export default withLoading;
*/