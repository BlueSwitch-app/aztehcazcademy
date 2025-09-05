// src/components/VideoList.js
import React from 'react';
import './VideoList.css';

interface VI{
    videos: any
}

const VideoList: React.FC<VI> = ({ videos }) => {
  return (
    <div className="videos-section">
      <div className="section-title">
        <h2>Continuar Viendo</h2>
        <a href="#" className="view-all">Ver todos</a>
      </div>
      
      <div className="video-list">
        {videos.map((video: any) => (
          <div key={video.id} className="video-item">
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <span className="video-duration">{video.duration}</span>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <div className="video-meta">
                <span><i className="fas fa-book"></i> {video.course}</span>
                <span><i className="fas fa-eye"></i> {video.views} vistas</span>
              </div>
              <div className="video-progress">
                <div className="progress-fill" style={{ width: `${video.progress}%` }}></div>
              </div>
              <div className="video-actions">
                <a href="#" className="btn-small btn-primary">Continuar</a>
                <a href="#" className="btn-small btn-outline">Ver más tarde</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;