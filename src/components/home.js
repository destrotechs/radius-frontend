import React from "react";
import u from "../u.png";

function Home(){
    return(
        <div className="card">
        <div className="card-body">
        <h5 className="card-title">Packages</h5>
        <p>Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> className name to any table you wish to conver to a datatable</p>

        <table className="table table-bordered datatable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Age</th>
              <th scope="col">Start Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Brandon Jacob</td>
              <td>Designer</td>
              <td>28</td>
              <td>2016-05-25</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Bridie Kessler</td>
              <td>Developer</td>
              <td>35</td>
              <td>2014-12-05</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Ashleigh Langosh</td>
              <td>Finance</td>
              <td>45</td>
              <td>2011-08-12</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Angus Grady</td>
              <td>HR</td>
              <td>34</td>
              <td>2012-06-11</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Raheem Lehner</td>
              <td>Dynamic Division Officer</td>
              <td>47</td>
              <td>2011-04-19</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    );
}
export default Home;