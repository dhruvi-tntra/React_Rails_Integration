var Articles = createReactClass({
  propTypes: {
    articles: [
      {
        title: PropTypes.string,
        author: PropTypes.string
      }
    ]
  },
  render: function() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {this.props.articles.map(article => (
            <tr key={article.title}>
              <td>{article.title}</td>
              <td>{article.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
});
