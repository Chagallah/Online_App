USE [GHospital]
GO
create procedure Insert_SignsSymptoms
			(@patient_id varchar(50)
           ,@wheezing int
           ,@sore_throat int
           ,@breathing_difficulty int
           ,@rhinorrhea int
           ,@chest_pain int
           ,@diarrhea int
           ,@vomiting int
           ,@muscle_aches int
           ,@chills int
           ,@lack_of_appetite int
           ,@convulsions int
           ,@cannot_drink_orbreastfeed int
           ,@vomits int
           ,@stridor int
           ,@grunting int
           ,@nasal_flaring int
           ,@chest_in_drawing int
           ,@lethargic int
           ,@unconcious int
           ,@createdby char(50)
           ,@datecreated datetime)
		   as
INSERT INTO [dbo].[SignsSymptoms]
           ([patient_id]
           ,[wheezing]
           ,[sore_throat]
           ,[breathing_difficulty]
           ,[rhinorrhea]
           ,[chest_pain]
           ,[diarrhea]
           ,[vomiting]
           ,[muscle_aches]
           ,[chills]
           ,[lack_of_appetite]
           ,[convulsions]
           ,[cannot_drink_orbreastfeed]
           ,[vomits]
           ,[stridor]
           ,[grunting]
           ,[nasal_flaring]
           ,[chest_in_drawing]
           ,[lethargic]
           ,[unconcious]
           ,[createdby]
           ,[datecreated])
     VALUES
           (@patient_id 
           ,@wheezing
           ,@sore_throat
           ,@breathing_difficulty
           ,@rhinorrhea
           ,@chest_pain
           ,@diarrhea
           ,@vomiting
           ,@muscle_aches 
           ,@chills 
           ,@lack_of_appetite 
           ,@convulsions 
           ,@cannot_drink_orbreastfeed 
           ,@vomits 
           ,@stridor
           ,@grunting 
           ,@nasal_flaring 
           ,@chest_in_drawing 
           ,@lethargic 
           ,@unconcious 
           ,@createdby 
           ,@datecreated)
GO


