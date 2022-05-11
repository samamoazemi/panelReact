import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.css';
import { GetAllCountries } from 'services/countries/getAllCountries';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Countries = () => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    const GetAllCountriesList = async () => {
      try {
        const { data } = await GetAllCountries();
        setCountries(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetAllCountriesList();
  }, []);

  const classes = useStyles();

  return (
    <section>
      <div className="addNewCountry">
        <Link to="/add-country">Add New Country</Link>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="countriesMenu" align="right">
                persianTitle
              </TableCell>
              <TableCell className="countriesMenu" align="right">
                title
              </TableCell>
              <TableCell className="countriesMenu" align="right">
                code
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries &&
              countries.map(item => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="item" className='countries'>
                    {item.persianTitle}
                  </TableCell>
                  <TableCell align="right">{item.title}</TableCell>
                  <TableCell align="right">{item.code}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default Countries;

// <div className="formControl">
// <div className='addNewCountry'>
//   <Link to="/add-country">Add New Country</Link>
// </div>
// {countries && (
//   <div className="countriesList">
//     {countries.map(item => (
//       <div className="countries" key={item.id}>
//         <span>{item.code} - </span>
//         <span>{item.persianTitle} - </span>
//         <span>{item.title}</span>
//       </div>
//     ))}
//   </div>
// )}
// </div>
