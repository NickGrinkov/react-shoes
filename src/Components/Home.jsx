import React from "react";
import Filter from "./Filter";
import {useDispatch, useSelector} from 'react-redux';
import {setFilter} from '../redux/actions/filterAction';
import {setSize} from '../redux/actions/sizeAction';
import {setSortBy} from "../redux/actions/sortAction";
import { fetchShoes } from "../redux/actions/asycShoesAction";
import Sort from "./Sort";
import ShoeItem from './ShoeItem';
import Footer from "./Footer";

function Home() {
    const categoryNames = ['Белые', 'Черные', 'Красные', 'Синие'];
    const sortItems = [
      {name: 'популярности', type: 'popular'},
      {name: 'цене', type: 'price'},
      {name: 'алфавиту', type: 'name'},
     ]

    const dispatch = useDispatch();
    const category = useSelector(state => state.filter.category);
    const activeSize = useSelector(state => state.size.active);
    const sortBy = useSelector(state => state.sort.sortBy);
    const shoes = useSelector(state => state.shoes.shoes);


    React.useEffect(() => {
      dispatch(fetchShoes(sortBy, category));
    }, [sortBy, category])

    
    function getFilterItem(index) {
      dispatch(setFilter(index))
    }

    function getActiveShoe(ind) {
      dispatch(setSize(ind))
    }
    
    function onClickSort(name) {
      dispatch(setSortBy(name))
    }


  return (
    <main className="main">
      <div className="main_wrapper">
        <Filter category={category} onClickFilter={getFilterItem} items={categoryNames}/>
        <Sort sortBy={sortBy} onClickSort={onClickSort} sortItems={sortItems}/>
      </div>
        <section className="shoes">
          {shoes && shoes.map((shoe) => (
            <ShoeItem onClickSize={getActiveShoe} {...shoe}/>
          ))
          }
        </section>
      <hr/>
      <Footer />
    </main>
  );
}

export default Home;
