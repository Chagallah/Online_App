USE [GHospital]
GO
create procedure Insert_Screening
			(@patient_id varchar(50)
           ,@history_of_fever int
           ,@body_temperature decimal(18,0)
           ,@coughing int
           ,@onset_of_symptoms int
           ,@interview_type int
           ,@hospital_id varchar(50)
           ,@interview_date date
           ,@createdby char(50)
           ,@datecreated datetime)
		   as
INSERT INTO [dbo].[Screening]
           ([patient_id]
           ,[history_of_fever]
           ,[body_temperature]
           ,[coughing]
           ,[onset_of_symptoms]
           ,[interview_type]
           ,[hospital_id]
           ,[interview_date]
           ,[createdby]
           ,[datecreated])
     VALUES
           (@patient_id 
           ,@history_of_fever 
           ,@body_temperature 
           ,@coughing 
           ,@onset_of_symptoms 
           ,@interview_type 
           ,@hospital_id 
           ,@interview_date 
           ,@createdby 
           ,@datecreated )
GO


