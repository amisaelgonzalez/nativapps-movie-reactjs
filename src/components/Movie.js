import React from 'react';
import { Modal, Avatar, Button, List, Spin } from 'antd';

import MovieService from '../services/movie';

const Movie = () => {
    const [loading, setLoading] = React.useState(true);
    const [list, setList] = React.useState([]);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        onLoadMore();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const errorModal = () => {
        Modal.error({
            title: 'Error',
            content: 'Error al obtener listado. Intente nuevamente.',
            onOk() {
                console.log('ok');
            }
        });
    };

    const onLoadMore = async () => {
        setLoading(true);
        MovieService.get(page).then(async res => {
            console.log(res.data);

            setPage(page + 1);
            setList(list => [...list, ...res.data]);
            setLoading(false);

            window.dispatchEvent(new Event('resize'));
        }).catch(error => {
            errorModal();
            setLoading(false);
            console.log(error);
        });
    };

    const loadMore =
    !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>Loading more</Button>
      </div>
    ) : null;

    const loadingSpin = () => (
        <>
            {loading &&
                <div style={{textAlign: 'center', marginTop: '20px'}}>
                    <Spin />
                </div>
            }
        </>
    )

    return (
        <>
            <div style={{maxWidth: '1400px', margin: 'auto'}}>
                <List
                    className="loadmore-list"
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={list}
                    renderItem={(item) => (
                        <List.Item actions={[]}>
                            <List.Item.Meta
                                avatar={<Avatar shape="square" size={48} src={item.poster} />}
                                title={item.title}
                                description={item.year}
                            />
                            <div>{item.type}</div>
                        </List.Item>
                    )}
                />
                {loadingSpin()}
            </div>
        </>
    );
};

export default Movie;