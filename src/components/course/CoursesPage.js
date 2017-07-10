import React, {ProTypes} from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: null }
    };
  }

  onTitleCHange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course });
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value={this.state.course.title}
          onClick={this.onClickSave} />
      </div>
    );
  }
}

export default CoursesPage;
