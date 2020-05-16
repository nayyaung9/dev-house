const ErrorPage = {
  render: () => {
    return `
      <div style="display: flex; align-items: center; justify-content: center; color: #fff !important">
        <div style="margin-top: 120px;">
          <h1>The page you requesting is not found on Dev-House</h1>
          <h4>May be you are leading into miss url :(</h4>
        </div>
      </div>
    `;
  }
}

export default ErrorPage;