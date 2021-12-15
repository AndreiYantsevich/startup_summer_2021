import {FC} from 'react';
import ReactPaginate from 'react-paginate';


export const RepositoriesData: FC = () => {
    return (
        <>
            <div className="repo">
                <h2 className="repo_title">Repositories (225)</h2>
                <div className="repo_info">
                    <div key="" className="repo_info-common">
                        <a href="" target="_blank" rel="noreferrer">
                            <h2 className="repo_info__title">Title</h2>
                        </a>
                        <p className="repo_info__description">Desc</p>
                    </div>
                    <div className="pagination-container">
                        <p className="pagination-info">info</p>
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            pageRangeDisplayed={1}
                            marginPagesDisplayed={1}
                            pageCount={2}
                            onPageChange={() => {}}
                            containerClassName="pagination"
                            previousLinkClassName="pagination__link"
                            nextLinkClassName="pagination__link"
                            disabledClassName="pagination__link--disabled"
                            activeClassName="pagination__link--active"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}