import React, { useState } from "react";
import axios from "axios";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";

function List(props) {
  const [data, setData] = useState([]);

  const sendRep = async props => {
    const { state, repSen } = props;
    if (state === "") {
      alert("Choose a state.");
    } else {
      if (repSen === "Representative") {
        await axios.get(`/representatives/${state}`).then(res => {
          setData(res.data.results);
        });
      } else if (repSen === "Senator") {
        await axios.get(`/senators/${state}`).then(res => {
          setData(res.data.results);
        });
      }
    }
  };
  const submit = () => {
    if (props.repSen === "Senator") {
      sendRep(props);
    } else if (props.repSen === "none") {
      alert("choose either rep or senator");
    } else {
      sendRep(props);
    }
  };

  const handleUpdatePerson = (data) => {
    props.setSelectedPerson(data)
    console.log(data)
  }

  const mappedState = data.map((data, id) => {
    return (
      <TableRow scope='row' key={id} onClick={() => handleUpdatePerson(data)} hover>
        <TableCell align='center'>{data.name}</TableCell>
        <TableCell align="center">{data.party}</TableCell>
      </TableRow>
    );
  });
  return (
    <>
      <Button onClick={submit}>Submit</Button>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              Name
            </TableCell>
            <TableCell align="center">
              Party
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{mappedState}</TableBody>
      </Table>
    </>
  );
}

export default List;
