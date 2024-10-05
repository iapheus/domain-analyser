import React, { useEffect, useState } from 'react';
import InfoBar from '../components/InfoBar';
import Masonry from '@mui/lab/Masonry';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Loading from '../components/Loading';

function Client() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [infoBars, setInfoBars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const BASE_URL = 'https://web-check.xyz/api/';
      const apiList = ['tech-stack']; 
      const targetUrl = sessionStorage.getItem('targetUrl');

      if (targetUrl) {
        try {
          const fetchPromises = apiList.map(element => fetch(`${BASE_URL}${element}?url=${targetUrl}`));
          const responses = await Promise.all(fetchPromises);
          
          const data = await Promise.all(responses.map(response => response.json()));

          const infoBarsData = data
            .map((item, index) => ({
              title: apiList[index],
              data: item
            }))
            .filter(item => !item.data.error);

          setInfoBars(infoBarsData);
        } catch (error) {
          setError(error);
        }
      } else {
        console.log('You didn\'t specify a URL');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (infoBars.length === 0) {
    return <Loading/>;
  }

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Masonry columns={isSmallScreen ? 1 : 3} spacing={3}>
        {infoBars.map((infoBarData, index) => (
          <InfoBar key={index} data={infoBarData} />
        ))}
      </Masonry>
    </Box>
  );
}

export default Client
