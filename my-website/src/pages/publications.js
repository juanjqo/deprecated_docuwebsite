import React from 'react';
import Layout from '@theme/Layout';
import { Helmet } from "react-helmet"
import { useEffect } from 'react'


export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
      <div>
      <script src="$http://bibbase.org/show?bib=https%3A%2F%2Fapi.zotero.org%2Fgroups%2F150077%2Fitems%3Fkey%3DyqHi861yjEM6kWqD8yXy0hSD%26format%3Dbibtex%26limit%3D100&jsonp=1$"></script>
      </div>
      </div>
    </Layout>
  );
}