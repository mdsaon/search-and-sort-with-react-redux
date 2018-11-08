import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getProjects,
  searchProjects,
  sortProjects
} from "../../actions/projectsAction";
import Moment from "react-moment";
class Projects extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  searchHandler = (e) => {
    const value = e.target.value;
    this.props.searchProjects(value);
  };
  sortByProjectId = () => {
    this.props.sortProjects();
  };
  render() {
    const { projects } = this.props.projects;
    const renderProjects = projects.map(project => (
      <ul>
        <li>
          Id:{project.project}
        </li>
        <li>Description: {project.description}</li>
        <li>
          Start Date:
          <Moment format="DD.MM.YYYY">{project["start date"]}</Moment>
        </li>
        <li>Category: {project.category}</li>
        <li>Responsible: {project.responsible}</li>
        <li>Saving Amount:{project["savings amount"]}</li>
        <li>Currency: {project.currency !== "NULL" ? project.currency : ""}</li>
        <li>Complexity:{project.complexity}</li>
      </ul>
    ));
    return (
      <div className="projects-container">
        <h1>Hello Projects</h1>
        <form>
          Search: <input type="text" onChange={this.searchHandler} />
        </form>
        <br />
        <button onClick={this.sortByProjectId}>Sort</button>
        {renderProjects}
      </div>
    );
  }
}
Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  searchProjects: PropTypes.func.isRequired,
  sortyProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  { getProjects, searchProjects, sortProjects }
)(Projects);
