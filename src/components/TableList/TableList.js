import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
import {
  getTodosList,
  deleteTodo,
  updateTodo,
} from "../../helpers/Todo/TodoHelper";
import { getUsersList } from "../../helpers/User/UserHelper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid/Grid";

const styles = makeStyles({
  table: {
    minWidth: 650,
  },
});
class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoDataList: [],
      data: [],
      users_data: [],
      modalStat: false,
    };
  }

  async componentDidMount() {
    let TodosList = await getTodosList();
    if (TodosList.status) {
      await this.setState({
        data: TodosList.data,
      });
    }

    let UsersList = await getUsersList();
    if (UsersList.status) {
      await this.setState({
        users_data: UsersList.data,
      });
    }
  }

  onChangePage = (pageOfItems) => {
    this.setState({
      todoDataList: pageOfItems,
    });
  };

  render() {
    const { todoDataList } = this.state;
    const classes = this.props;
    return (
      <div>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} style={{ padding: "8px" }}>
            <TableContainer component={Paper} >
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Assignee</TableCell>
                  
                  </TableRow>
                </TableHead>

                <TableBody>
                  {todoDataList.map((item, index) => {
                    return (
                      <TableRow>
                        <TableCell>{item.title}</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          {item.completed === true ? "Done" : "In Progress"}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>

                <TableFooter>
                  <TableRow>
                    <Pagination
                      pageSize={10}
                      items={this.state.data}
                      onChangePage={this.onChangePage}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TableList;
